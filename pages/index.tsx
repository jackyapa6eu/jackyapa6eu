import React, {useEffect, useState} from 'react';
import Card from "../src/components/Card";
import { QrReader}  from 'react-qr-reader';
import "webrtc-adapter/out/adapter.js";
///
const HomePage = ({message = 'xxx'}) => {
    const [result, setResult] = useState('');
    const handleScan = (data) => {
        if (data) {
            setResult(data.text);
            alert(data.text)
        }
    };

    const handleError = (err) => {
        alert(err);
    };

    const handleResult = (result) => {
        console.log(result); // здесь можно выполнить необходимые действия с результатом сканирования
    };

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: false })
            .then(function(stream) {
                console.log('THEN')
            })
            .catch(function(err) {
                alert("An error occurred: " + err);
            });
    }, [])



    return (
        <div>
            <img src="https://mc.yandex.ru/watch/92850603" style={{position: 'absolute', left: '-9999px'}} alt="" />
            <h1>Hello, world! message: {result}</h1>
            <div style={{width: '50%', background: 'red'}}>
                <QrReader
                    delay={800}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: '100%' }}
                    onResult={handleResult}
                />
            </div>
            <Card msg={message}/>
        </div>
    );
};

/*
export async function getServerSideProps() {
    return {
        props: {
            message: 'SSR IS WORKING!!!'
        }
    };
}
 */
export default HomePage;
