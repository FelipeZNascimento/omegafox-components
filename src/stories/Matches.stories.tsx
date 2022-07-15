import React from 'react';
import { Match } from '../components';
import { FOOTBALL_MATCH_STATUS } from '../index';
import { footballClock, matchInfo, matchInfoNoBets } from '../components/mocks';
import { cloneDeep } from 'lodash';

export default {
  title: 'Matches (Examples)',
  component: Match
};

export const MatchNotStartedEditable = () => (
  <Match
    isEditable
    clock={{ time: 0, status: FOOTBALL_MATCH_STATUS.NOT_STARTED }}
    timestamp={matchInfo.timestamp}
    sport={matchInfo.sport}
    teams={matchInfoNoBets.teams}
  />
);

export const MatchStartedExpandable = () => (
  <Match
    isExpandable
    isEditable={false}
    betStatus="full"
    clock={footballClock}
    expandableContent={() => {
      return <p>Vila Capanema</p>;
    }}
    timestamp={matchInfo.timestamp}
    sport={matchInfo.sport}
    teams={matchInfo.teams}
  />
);

const invertedTeams = cloneDeep(matchInfo.teams);
invertedTeams[0].align = 'right';
invertedTeams[1].align = 'left';

export const MatchWithInvertedTeams = () => (
  <Match
    isExpandable
    isEditable={false}
    betStatus="half"
    clock={{ time: 39, status: FOOTBALL_MATCH_STATUS.SECOND_HALF_OVERTIME }}
    expandableContent={() => {
      return <p>Vila Capanema</p>;
    }}
    sport={matchInfo.sport}
    teams={invertedTeams}
    timestamp={matchInfo.timestamp}
  />
);
