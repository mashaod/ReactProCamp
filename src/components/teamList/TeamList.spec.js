import React from 'react';
import { shallow } from 'enzyme';
import { TeamList } from './TeamList';

import ErrorIndicator from '../errorIndicator';
import PreloaderCircular from '../preloaderCircular';
import TeamTile from './components/TeamTile';

describe('TeamList container', () => {
    const props = {
        teams: [],
        loading: false,
        error: null,
        key: 1,
        onFetchTeams: () => {}
    }

    describe('TeamList container initial', () => {
        const mockFetchTeams = jest.fn()
        const nextProps = {
            ...props,
            onFetchTeams: mockFetchTeams
        }

        const teamListContainer = shallow(<TeamList {...nextProps} />);

        it('renders properly', () => {
            expect(teamListContainer).toMatchSnapshot();
        })

    })

    describe('TeamList container isLoading', () => {
        const nextProps = {
            ...props,
            loading: true
        }

        const teamListContainer = shallow(<TeamList {...nextProps} />);

        it('renders properly', () => {
            expect(teamListContainer).toMatchSnapshot();
        })

        it('renders preloader circular', () => {
            expect(teamListContainer.find(PreloaderCircular)).toHaveLength(1);
        })
    })

    describe('TeamList container render <TeamTile />', () => {
        const nextProps = {
            ...props,
            teams: [1]
        }

        const teamListContainer = shallow(<TeamList {...nextProps} />);

        it('renders properly', () => {
            expect(teamListContainer).toMatchSnapshot();
        })

        it('renders <TeamTile /> template', () => {
            expect(teamListContainer.find(TeamTile)).toHaveLength(1);
        })
    })

    describe('TeamList container with error', () => {
        const nextProps = {
            ...props,
            error: true
        }

        const teamListContainer = shallow(<TeamList {...nextProps} />);

        it('renders properly', () => {
            expect(teamListContainer).toMatchSnapshot();
        })

        it('renders error indicator', () => {
            expect(teamListContainer.find(ErrorIndicator)).toHaveLength(1);
        })
    })

})
