import React from 'react';
import Card from "../src/components/Card";
import MyDocument from './_document';

const HomePage = ({message}) => {
    return (
        <div>
            <img src="https://mc.yandex.ru/watch/92850603" style="position:absolute; left:-9999px;" alt="" />
            <h1>Hello, world! message: </h1>
            <Card msg={message}/>
        </div>
    );
};

export async function getServerSideProps() {
    return {
        props: {
            message: 'SSR IS WORKING!!!'
        }
    };
}

export default HomePage;
