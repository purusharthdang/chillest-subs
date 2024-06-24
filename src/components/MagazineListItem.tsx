'use client'
import { fakeMagazineData, genreOptions } from '@/constants/FakeData'
import { getName } from 'country-list'
import dayjs from 'dayjs';
import React from 'react'

type MagazineProps = typeof fakeMagazineData[0];
const MagazineListItem = (props: MagazineProps) => {
    const {
        name,
        readingPeriods,
        currentTheme,
        country,
        yearFounded,
        genres,
        descriptionFull,
        description,
        simultaneousSubmissions,
        responseDays,
        website,
    } = props;

    const genreOptionIds = new Set(genres?.map((genre) => genre.optionId));
    const genreList = genreOptions.filter((genre) => genreOptionIds.has(genre.id)).map(genre => genre.label);

    return (
        <div>
            <div>---</div>
            <b><a href={website ?? '#'}>{name}</a> | Deadline: {dayjs(readingPeriods?.[0].deadline?.$date).format('MMM DD')} {currentTheme ?  ` | Theme: ${currentTheme}` : ''}</b>
            <br />
            <p>{getName(country ?? '')}-based literary magazine {yearFounded ? `founded in ${yearFounded}` : ''} that publishes {genreList.join(', ')}.</p>
            <i><p>{descriptionFull || description || ''}</p></i>
            <p>{simultaneousSubmissions ? 'Accepts simultaneous submissions.' : 'Does not accept simultaneous submissions.'} Responds within {responseDays} days.</p>
            <div>---</div>
        </div>
    )
}

export default MagazineListItem