import Terrain from 'react-icons/lib/md/terrain'
import Calendar from 'react-icons/lib/fa/calendar'
import { GymDayRow } from './GymDayRow'
import { PropTypes } from 'react'
import { Link } from 'react-router'

export const GymDayList = ({days, filter}) =>  {
	const filteredDays = (!filter || 
  		!filter.match(/weights|cardio/))?
  		days:
  		days.filter(day => day[filter])

	return (
		<div className="gym-day-list">
		<table>
			<thead>
				<tr>
					<th>Date</th>
					<th>Location</th>
					<th>Weights</th>
					<th>Cardio</th>
				</tr>
				<tr>
					<td colSpan={4}>
					<Link to="/list-days">
						All Days
					</Link>
					<Link to="/list-days/weights">
						Weight Days
					</Link>
					<Link to="/list-days/cardio">
						Cardio Days
					</Link>
					</td>
				</tr>
			</thead>
			<tbody>
				{filteredDays.map((day, i) =>
					<GymDayRow key={i}
							   {...day}/>	
					)}
			</tbody>

		</table>
		</div>
)
}

GymDayList.propTypes = {
	days: function(props) {
		if(!Array.isArray(props.days)) {
			return new Error(
				"SkiDayList should be an array"	
				)
		} else if(!props.days.length) {
			return new Error(
				"SkiDayList must have at least one record"
				)
		} else {
			return null
		}
	}
}
