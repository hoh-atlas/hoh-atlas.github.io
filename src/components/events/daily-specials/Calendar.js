import React from 'react';
import { useState, useEffect } from "react";

import Prologue from "../../shared/Prologue";
import SectionDivider from "../../shared/SectionDivider";
import { getItemData } from '../../shared/utils';

import allEvents from "../data";

const Calendar = (props) => {
    const basePath = "events";
    const pageName = "Events";

    const getEvent = () => {
        return allEvents.find(oneEvent => oneEvent.id === props.eventId);
    };

    const event = getEvent();

    // Function to clean up the betaStartDate string
    const cleanDateString = (dateString) => {
        return dateString.replace(/(\d+)(st|nd|rd|th)/, '$1');
    };

    // Function to calculate the number of days since the betaStartDate
    const calculateDaysSinceStart = (startDate) => {
        const cleanedDate = cleanDateString(startDate);
        const betaStartDate = new Date(cleanedDate);
        const today = new Date();

        if (isNaN(betaStartDate)) {
            console.error("Invalid date:", cleanedDate);
            return 0; // Return 0 if the date is invalid
        }

        const timeDifference = today - betaStartDate;
        const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        return Math.max(1, daysDifference + 1);
    };

    // Use the passed daysPassed prop instead of recalculating
    const daysPassed = props.daysPassed || calculateDaysSinceStart(event.betaStartDate);

    // Get only the daily specials up to the current day
    const dailySpecialsToDisplay = event.dailySpecials.slice(0, daysPassed);

    // Helper function to chunk the array into weeks
    const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            result.push(array.slice(i, i + chunkSize));
        }
        return result;
    };

    // Chunk the daily specials into weeks (7 days per week)
    const dailySpecialChunks = chunkArray(dailySpecialsToDisplay, 7);

    return (
        <div style={{ width: '100%', marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
            <table style={{
                width: '100%', 
                maxWidth: '1000px', 
                margin: 'auto', 
                textAlign: 'center',
                tableLayout: 'fixed'
            }}>
                <tbody>
                    {dailySpecialChunks.map((week, weekIndex) => (
                        <React.Fragment key={weekIndex}>
                            <tr>
                                {week.map((dailySpecial, dayIndex) => (
                                    <th key={dayIndex} style={{ width: '14.28%' }}>
                                        <div>Day {weekIndex * 7 + dayIndex + 1}</div>
                                    </th>
                                ))}
                                {week.length < 7 && Array(7 - week.length).fill(null).map((_, index) => (
                                    <td key={`empty-${index}`} style={{ width: '14.28%' }} />
                                ))}
                            </tr>
                            <tr>
                                {week.map((dailySpecial, dayIndex) => (
                                    <td key={dayIndex} style={{ width: '14.28%' }}>
                                        <div>{getItemData(dailySpecial.resource).name}</div>
                                    </td>
                                ))}
                                {week.length < 7 && Array(7 - week.length).fill(null).map((_, index) => (
                                    <td key={`empty-resources-${index}`} style={{ width: '14.28%' }} />
                                ))}
                            </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Calendar;
