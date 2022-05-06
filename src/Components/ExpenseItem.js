import './ExpenseItem.css'

function ExpenseItem(){
    return (
        <div className='expense-item'>
           <div>March 28 2020</div>
           <div className ='expense-item__description'>
           <h2>purchased a car</h2>
           <div className='expense-item__price'>$296</div>



           </div>
           
        </div>
    );
}
export default ExpenseItem