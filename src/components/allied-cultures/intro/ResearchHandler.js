import React, { useState, useEffect } from 'react';
import data_research from "../data_research";
import { getItemIcon, getItemData } from '../../shared/utils';

const ResearchHandler = () => {
    const [completedTechnologies, setCompletedTechnologies] = useState({});

    const data = data_research;

    const categoryPriority = ["soft", "research_materials", "goods"];

    useEffect(() => {
        const savedData = localStorage.getItem("completedTechnologies");
        if (savedData) {
            setCompletedTechnologies(JSON.parse(savedData));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("completedTechnologies", JSON.stringify(completedTechnologies));
    }, [completedTechnologies]);

    const toggleCompletion = (id, enable) => {
        const enableParents = (techId) => {
            data.forEach((era) => {
                const tech = era.technologies.find((t) => t.id === techId);
                if (tech) {
                    tech.parents.forEach((parentId) => {
                        setCompletedTechnologies((prev) => ({
                            ...prev,
                            [parentId]: true,
                        }));
                        enableParents(parentId);
                    });
                }
            });
        };

        const disableChildren = (techId) => {
            data.forEach((era) => {
                const tech = era.technologies.find((t) => t.id === techId);
                if (tech) {
                    tech.children.forEach((childId) => {
                        setCompletedTechnologies((prev) => ({
                            ...prev,
                            [childId]: false,
                        }));
                        disableChildren(childId);
                    });
                }
            });
        };

        setCompletedTechnologies((prev) => ({
            ...prev,
            [id]: enable,
        }));

        if (enable) {
            enableParents(id);
        } else {
            disableChildren(id);
        }
    };

    const calculateTotalCosts = () => {
        const totalCosts = {};
        data.forEach((era) => {
            era.technologies.forEach((tech) => {
                if (!completedTechnologies[tech.id]) {
                    tech.costs.forEach((cost) => {
                        if (!totalCosts[cost.resource]) {
                            totalCosts[cost.resource] = 0;
                        }
                        totalCosts[cost.resource] += cost.amount;
                    });
                }
            });
        });
        return totalCosts;
    };

    const totalCosts = calculateTotalCosts();

    const maxCostColumns = Math.max(
        ...data.flatMap((era) =>
            era.technologies.map((tech) =>
                tech.costs.filter((cost) => cost.resource !== "research_point").length
            )
        )
    );

    const sortCostsByCategory = (costs) => {
        return costs.sort((a, b) => {
            const categoryA = getItemData(a.resource).category;
            const categoryB = getItemData(b.resource).category;
            return categoryPriority.indexOf(categoryA) - categoryPriority.indexOf(categoryB);
        });
    };

    return (
        <div>
            <div className="calculated-costs">
                <h3>Total Costs for Not Completed Technologies:</h3>
                <ul>
                    {Object.entries(totalCosts).map(([resource, amount]) => (
                        <li key={resource}>
                            {amount}x {getItemIcon(resource)}
                        </li>
                    ))}
                </ul>
            </div>

            <table className="research-table" style={{ width: '100%', tableLayout: 'auto', borderCollapse: 'collapse' }} cellSpacing="0" cellPadding="8">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>RP</th>
                        <th colSpan={maxCostColumns}>Costs</th>
                        <th>Completed</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((era) =>
                        era.technologies.map((tech) => {
                            const rpCost = tech.costs.find((cost) => cost.resource === "research_point");
                            const otherCosts = tech.costs.filter((cost) => cost.resource !== "research_point");

                            const sortedCosts = sortCostsByCategory(otherCosts);

                            return (
                                <tr key={tech.id}>
                                    <td>{tech.id}</td>
                                    <td>{tech.name}</td>
                                    <td>{rpCost ? rpCost.amount : 0}x {getItemIcon("research_point")}</td>
                                    {Array.from({ length: maxCostColumns }).map((_, index) => (
                                        <td key={index}>
                                            {sortedCosts[index] ? (
                                                <>
                                                    {sortedCosts[index].amount}x{" "}
                                                    {getItemIcon(sortedCosts[index].resource)}
                                                </>
                                            ) : null}
                                        </td>
                                    ))}
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={completedTechnologies[tech.id] || false}
                                            onChange={(e) =>
                                                toggleCompletion(tech.id, e.target.checked)
                                            }
                                        />
                                    </td>
                                </tr>
                            );
                        })
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ResearchHandler;
