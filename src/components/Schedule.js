import React from 'react';
import './Schedule.css';

export default function Schedule ({ schedule }) {
    return(
        <div className="schedule-container">
        <h2>Schedule</h2>
        <table>
            <thead>
                <tr>
                   {/*  <th>7:00 AM</th>
                    <th>8:00 AM</th>
                    <th>9:00 AM</th>
                    <th>10:00 AM</th>
                    <th>11:00 AM</th>
                    <th>12:00 PM</th>
                    <th>1:00 PM</th>
                    <th>2:00 PM</th> */}
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                </tr>
            </thead>
            <tbody>
                {schedule.map((row, index) => (
                    <tr key={index}>
                        <td>{row.time}</td>
                        <td>{row.sunday || ''}</td>
                        <td>{row.monday || ''}</td>
                        <td>{row.tuesday || ''}</td>
                        <td>{row.wednesday || ''}</td>
                        <td>{row.thursday || ''}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
};
