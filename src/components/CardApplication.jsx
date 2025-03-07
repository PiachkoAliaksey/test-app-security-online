import React, { useEffect, useState } from 'react';
import useTruncatedElement from '../hooks/useTruncatedElement';
import Field from './common/Field';
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import Button from './common/Button';
import { fetchCardData } from '../api/apiGetCardData';
import { FaGear } from "react-icons/fa6";
import { Skeleton } from '@mui/material';



const CardApplication = () => {
    const ref = React.useRef(null);
    const [data, setData] = useState(null);

    const { isTruncated, isReadingMore, setIsReadingMore } = useTruncatedElement({
        ref, data
    });


    useEffect(() => {
        async function getDataCard() {
            const data = await fetchCardData()
            setData(data)
        }
        getDataCard()
    }, [])


    return (
        <div className={`w-[328px] ${isTruncated ? 'min-h-[287px]' : 'pb-4'} overflow-hidden leading-5 px-4 pt-12 rounded-[16px] bg-white relative flex flex-col gap-3`}>
            <span className='absolute right-2 top-2'><FaGear /></span>
            <div className='flex gap-2 font-medium items-center absolute top-0 left-0'>
                {data ? <span style={{ backgroundColor: `${data.colorTile}` }} className={`block py-2.5 px-4 min-w-[103px] rounded-tl-[16px] rounded-br-[16px] text-white`}>№ {data.numberApplication}</span> : <Skeleton variant="rectangular" width={'103px'} height={'40px'} className='rounded-tl-[16px] rounded-br-[16px]' />}
                {data ? <h4 className=''>{data.status}</h4> : <Skeleton variant="text" width={'80px'} height={'20px'} />}
            </div>

            <div className='flex flex-col gap-2'>
                <Field isLoading={Boolean(data)} text={data && data.dateCreation} duration={data && data.duration} title={'Создана:'} />
                <Field isLoading={Boolean(data)} title={data && data.dateComplited ? 'Выполена:' : 'Контроль:'} text={data && (data.dateComplited ? data.dateComplited : data.dateControl)} />
                <Field isLoading={Boolean(data)} title={'Система:'} text={data && data.system} />
                <Field isLoading={Boolean(data)} title={'Объект:'} text={data && data.object} />
            </div>

            <span className='border-t-[#DBDBDB] border-t-[1px]'></span>

            <div>
                <p ref={ref} className={`${!isReadingMore && 'line-clamp-3'} text-[14px]`}>
                    {data ? data.textApplication :
                        <>
                            <Skeleton variant='triangle' className='rounded-md mb-1' />
                            <Skeleton variant='triangle' className='rounded-md mb-1' />
                            <Skeleton variant='triangle' className='rounded-md mb-1' />
                        </>
                    }</p>
            </div>

            {isTruncated ?
                (<div className={`h-[60px] ${isTruncated && !isReadingMore && 'bg-custom-gradient absolute'}  w-full bottom-0 left-0 flex items-center justify-center `}>
                    {!isReadingMore ? (
                        <Button onClick={setIsReadingMore} title={'Читать далее'}> <GoTriangleDown /></Button>
                    ) : (<Button onClick={setIsReadingMore} title={'Свернуть'}>{<GoTriangleUp />}</Button>)}
                </div>) : null}
        </div>
    )
}

export default CardApplication;