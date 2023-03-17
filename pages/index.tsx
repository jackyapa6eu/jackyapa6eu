import React from 'react';
import Card from "../src/components/Card";
import MyDocument from './_document';

const HomePage = ({message}) => {
    return (
        <div>
            <MyDocument __NEXT_DATA__={}/>
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
