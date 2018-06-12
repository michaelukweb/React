import GoPerson from 'react-icons/lib/go/person'
import Terrain from 'react-icons/lib/md/terrain'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'


//Stateless function
export const GymDayRow = ({location, date, weights,cardio}) => (

	<tr>
		<td>
			{date}
		</td>
		<td>
			{location}
		</td>
		<td>
			{(weights) ? <GoPerson/> : null}
		</td>
		<td>
			{(cardio) ? <Terrain/> : null}
		</td>
	</tr>

)

GymDayRow.propTypes = {
	location: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	weights: PropTypes.bool,
	cardio: PropTypes.bool
}