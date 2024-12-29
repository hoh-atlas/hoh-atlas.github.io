import "./ResearchHandler.css";
import React, { useState, useEffect } from 'react';
import { getItemIcon, getItemData } from "../../../shared-resources/utils/utils";
import H1 from "@/src/components/h1/H1";

const ResearchHandler = (props) => {
    const [completedTechnologies, setCompletedTechnologies] = useState({});
    const technologies = props.data;

    const categoryPriority = ["soft", "research_materials", "goods"];

    useEffect(() => {
        const savedData = localStorage.getItem(`completedTechnologies-${props.eraId}`);
        if (savedData) {
            setCompletedTechnologies(JSON.parse(savedData));
        } else {
            setCompletedTechnologies({});
        }
    }, [props.era]);

    useEffect(() => {
        localStorage.setItem(`completedTechnologies-${props.eraId}`, JSON.stringify(completedTechnologies));
    }, [completedTechnologies, props.era]);

    const toggleCompletion = (id, enable) => {
        const enableParents = (techId) => {
            const tech = technologies.find((t) => t.id === techId);
            if (tech) {
                tech.components[0].start.requirements.forEach((parent) => {
                    setCompletedTechnologies((prev) => ({
                        ...prev,
                        [parent.id]: true,
                    }));
                    enableParents(parent.id);
                });
            }
        };

        const disableChildren = (techId) => {
            const tech = technologies.find((t) => t.id === techId);
            if (tech) {
                tech.components[0].start.requirements.forEach((child) => {
                    setCompletedTechnologies((prev) => ({
                        ...prev,
                        [child.id]: false,
                    }));
                    disableChildren(child.id);
                });
            }
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
        technologies.forEach((tech) => {
            if (!completedTechnologies[tech.id]) {
                tech.components[0].start.costs.forEach((cost) => {
                    const resourceId = cost.definitionId;
                    if (!totalCosts[resourceId]) {
                        totalCosts[resourceId] = 0;
                    }
                    totalCosts[resourceId] += parseInt(Math.abs(cost.amount));
                });
            }
        });
        return totalCosts;
    };

    const totalCosts = calculateTotalCosts();

    const maxCostColumns = Math.max(
        ...technologies.map((tech) =>
            tech.components[0].start.costs.filter((cost) => cost.definitionId !== "research_points").length
        )
    );

    const sortCostsByCategory = (costs) => {
        return costs.sort((a, b) => {
            const categoryA = getItemData(a.definitionId).category;
            const categoryB = getItemData(b.definitionId).category;
            return categoryPriority.indexOf(categoryA) - categoryPriority.indexOf(categoryB);
        });
    };

    const sortedTechnologies = technologies.sort((a, b) => {
        if (a.column === b.column) {
            return a.order - b.order;
        }
        return a.column - b.column;
    });

    return (
        <>
            <div>
                <div className="calculated-costs">
                    <H1>Remaining costs</H1><br/>
                    <div className="calculated-costs-items">
                        {Object.entries(totalCosts).map(([resource, amount]) => (
                            <div key={resource} className="calculated-costs-item">
                                {amount}x {getItemIcon(resource)}
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <small style={{ fontSize: '11px', color: '#916a17' }}>
                        <i>Note: Each technology you mark as "Completed" will automatically finish all of its prerequisite technologies. You do not need to click all of them manually.</i>
                    </small>
                </div>
                <div className="scroll">
                    <table className="research-table" style={{ width: '80%', tableLayout: 'auto', borderCollapse: 'collapse' }} cellSpacing="0" cellPadding="8">
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
                            {sortedTechnologies.map((tech, index) => { // Adding index as the first column
                                const rpCost = tech.components[0].start.costs.find((cost) => cost.definitionId === "research_points");
                                const otherCosts = tech.components[0].start.costs.filter((cost) => cost.definitionId !== "research_points");

                                const sortedCosts = sortCostsByCategory(otherCosts);

                                return (
                                    <tr key={tech.id}>
                                        <td>{index + 1}</td> {/* Technology index (1-based) */}
                                        <td>{tech.name}</td>
                                        <td>{rpCost ? Math.abs(rpCost.amount) : 0}x {getItemIcon("research_points")}</td>
                                        {Array.from({ length: maxCostColumns }).map((_, colIndex) => (
                                            <td key={colIndex}>
                                                {sortedCosts[colIndex] ? (
                                                    <>
                                                        {Math.abs(sortedCosts[colIndex].amount)}x{" "}
                                                        {getItemIcon(sortedCosts[colIndex].definitionId)}
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
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default ResearchHandler;
