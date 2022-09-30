import React from 'react';
import { Match } from '../components';
import { FOOTBALL_MATCH_STATUS } from '../index';
import { footballClock, matchInfo, matchInfoNoBets } from '../components/mocks';
import { cloneDeep } from 'lodash';
import { BET_VALUES } from '../components/Match/constants';

export default {
  title: 'Matches (Examples)',
  component: Match
};

export const MatchNotStartedEditable = () => (
  <Match
    isEditable
    id={matchInfo.id}
    clock={{ time: 0, status: FOOTBALL_MATCH_STATUS.NOT_STARTED }}
    timestamp={matchInfo.timestamp}
    sport={matchInfo.sport}
    teams={matchInfoNoBets.teams}
  />
);

export const MatchStartedExpandable = () => (
  <Match
    isExpandable
    id={matchInfo.id}
    isEditable={false}
    betValue={BET_VALUES.FULL}
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
    id={matchInfo.id}
    isEditable={false}
    betValue={BET_VALUES.HALF}
    clock={{ time: 39, status: FOOTBALL_MATCH_STATUS.SECOND_EXTRA_TIME }}
    expandableContent={() => {
      return <p>Vila Capanema</p>;
    }}
    sport={matchInfo.sport}
    teams={invertedTeams}
    timestamp={matchInfo.timestamp}
  />
);
