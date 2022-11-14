import React from 'react';
import {render, screen} from '@testing-library/react';
import {Table} from './Table';
import {Provider} from "react-redux";
import {store} from "../../app/store";

describe('Table', () => {

    it('renders Table component', () => {
        render(<Provider store={store}>
            <Table/>
        </Provider>);
        expect(screen.getByText('Result : 0')).toBeInTheDocument();
    });
});
