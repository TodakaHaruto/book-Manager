'use client';

import { addReview, removeReview } from '../lib/actions.js';
import theme from './theme.js';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Button } from '@mui/material';

export default function FormReaded({src: {id, read, memo}}) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <form action={addReview}>
                <input type='hidden' name='id' defaultValue={id} />
                <div className='mb-3'>
                    <p className='font-bold' htmlFor='read'>読了日:{read}</p>
                </div>
                <div className='mb-3'>
                    <label className='font-bold' htmlFor='memo'>メモ:</label>
                    <textarea id='memo' name='memo' rows="3" className='text-black block bg-gray-100 border-2 border-gray-600 w-full rounded focus:bg-white focus:outline-none focus:border-gray-400'>{memo}</textarea>
                </div>
                <a href='/readed'><Button variant="contained" color='primary' className='m-4'>戻る</Button></a>
                <Button type='submit' variant="contained" color='primary' className='m-4'>更新</Button>
                <Button type='submit' variant="contained" color='primary' formAction={removeReview}>削除</Button>                
                </form>
            </CssBaseline>
        </ThemeProvider>
        
    );
}