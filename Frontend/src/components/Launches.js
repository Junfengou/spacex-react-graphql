import React, { Component, Fragment } from "react";
import gql from "graphql-tag";
import LaunchItem from "./LaunchItem";
import { Query } from "@apollo/client/react/components";

const LAUNCHES_QUERY = gql`
	query LaunchesQuery {
		launches {
			flight_number
			mission_name
			launch_date_local
			launch_success
		}
	}
`;

export class Launches extends Component {
	render() {
		return (
			<Fragment>
				<h1 className="display-4 my-3">Launches</h1>
				<Query query={LAUNCHES_QUERY}>
					{({ loading, error, data }) => {
						if (loading) return <h4>Loading...</h4>;
						if (error) console.log(error);

						return (
							<Fragment>
								{data.launches.map((launch) => (
									<LaunchItem
										key={launch.flight_number}
										flight_number={launch.flight_number}
										mission_name={launch.mission_name}
										launch_date_local={launch.launch_date_local}
										launch_success={launch.launch_success}
									/>
								))}
							</Fragment>
						);
					}}
				</Query>
			</Fragment>
		);
	}
}

export default Launches;
