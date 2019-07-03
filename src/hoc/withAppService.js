import React from 'react';
import { AppServiceConsumer } from '../contexts';

const withAppServiceConsumer = (Wrapped) => {

    return (props) => {
        return (
            <AppServiceConsumer>
                {
                    (appService) => {
                        return (<Wrapped {...props} appService={appService}/>);
                    }
                }
            </AppServiceConsumer>
        );
    }
};

export default withAppServiceConsumer;