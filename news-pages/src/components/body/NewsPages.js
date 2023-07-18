import React from 'react';

const title = '기사제목 : GPT가 짱이야!';
const date = '2023.07.18';
const summary = 'GPT가 세상을 지배하고 있다.';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '1000px',
        height: '200px',
        border: '1px solid black',
        borderRadius: '5px',
        padding: '20px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    title: {
        marginBottom: '10px',
        color: '#0357FF',
    },
    date: {
        marginBottom: '10px',
    },
    summary: {
        marginBottom: '10px',
    },
};

const NewsPages = () => {
    return (
        <form style={styles.container}>
            <h2 style={styles.title}>{title}</h2>
            <ul style={styles.date}>날짜 : {date}</ul>
            <ul style={styles.summary}>
                요약 <p>{summary}</p>
            </ul>
        </form>
    );
};

export default NewsPages;
