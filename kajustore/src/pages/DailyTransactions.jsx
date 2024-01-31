import React, { useEffect, useState } from 'react';
import EntryDailyTransactions from '../components/dailytransaction/EntryDailyTransaction';
import TransactionsTable from '../components/dailytransaction/TransactionsTable';
import { useDispatch,useSelector } from 'react-redux';
import {getDailyEntries} from '../features/dailyentry/dailyentrySlice'
import { reset ,} from '../features/dailyentry/dailyentrySlice';
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

const DailyTransactions = () => {
  




  const dispatch = useDispatch();

  const { dailyEntries, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.dailyentry
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || dailyEntries) {
     
    }

    dispatch(getDailyEntries());
  }, []);



  


  return (
    <>
    <div>
    </div>
      <div className="flex flex-row gap-4">
        <EntryDailyTransactions />
        <div className='mx-6 my-5'>
    
        </div>
        
        {isLoading &&  <Spinner />}
        {isError && <p>Error: {message}</p>}
        {!isLoading && !isError && 
          <TransactionsTable  TABLE_ROWS={dailyEntries ||[] } />
     } 
      </div>
    </>
  );
};



export default DailyTransactions;


      {/* <TransactionsTable TABLE_ROWS={dailyEntries || []} /> */}
