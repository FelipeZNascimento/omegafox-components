import React from 'react';
import { Match } from '../components';
import { FOOTBALL_MATCH_STATUS } from '../index';
import { footballClock, matchInfo } from '../components/mocks';
import { cloneDeep } from 'lodash';

export default {
  title: 'Matches (Examples)',
  component: Match
};

export const MatchNotStarted = () => (
  <Match
    clock={{ time: 0, status: FOOTBALL_MATCH_STATUS.NOT_STARTED }}
    timestamp={matchInfo.timestamp}
    location={matchInfo.location}
    sport={matchInfo.sport}
    stadium={matchInfo.stadium}
    teams={matchInfo.teams}
  />
);

export const MatchStarted = () => (
  <Match
    betStatus="full"
    clock={footballClock}
    timestamp={matchInfo.timestamp}
    location={matchInfo.location}
    sport={matchInfo.sport}
    stadium={matchInfo.stadium}
    teams={matchInfo.teams}
  />
);

const invertedTeams = cloneDeep(matchInfo.teams);
invertedTeams[0].align = 'right';
invertedTeams[1].align = 'left';

export const MatchWithInvertedTeams = () => (
  <Match
    betStatus="half"
    clock={{ time: 39, status: FOOTBALL_MATCH_STATUS.SECOND_HALF_OVERTIME }}
    timestamp={matchInfo.timestamp}
    location={matchInfo.location}
    sport={matchInfo.sport}
    stadium={matchInfo.stadium}
    teams={invertedTeams}
  />
);
