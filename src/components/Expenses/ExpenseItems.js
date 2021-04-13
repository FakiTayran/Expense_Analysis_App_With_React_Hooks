import React, { useState } from 'react';
import Card from '../UI/Card'
import './ExpenseItems.css'
import ExpensesChart from './ExpensesChart';
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList';


const ExpenseItems = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const onFilterChangeHandler = (year) => {
        setFilteredYear(year)

    };

    const filteredItems = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    
    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onFilterChange={onFilterChangeHandler} />
            <ExpensesChart expenses={filteredItems} />
            <ExpensesList items={filteredItems}/>
        </Card>

    )
}

export default ExpenseItems