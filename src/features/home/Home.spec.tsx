import React from 'react';
import {render, screen} from '@testing-library/react';
import {Home} from './Home';
import {Provider} from "react-redux";
import {store} from "../../app/store";

describe('Table', () => {

    it('renders Table component', () => {
        render(<Provider store={store}>
            <Home/>
        </Provider>);
        expect(screen.getByText('Result : 0')).toBeInTheDocument();
    });
});
