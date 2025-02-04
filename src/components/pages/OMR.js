import React from 'react';
import "../OMR.css";
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


const OMR = () => {
    return (
        <div className="main" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe 
                src="https://okincbucket.s3.us-east-1.amazonaws.com/Outcomes%20Management%20Report%202023%20update.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXAECKAJWN3IS2I4D%2F20250204%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250204T221600Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLWVhc3QtMSJGMEQCIAFlp5A2pmLP3GZPUfF1dyc47qyTD8oVPo08zfA%2BVOWHAiARvhiKYKyVjUxaAyYvNKYPx1rPEKAQlnKt9onki%2Fdd4yrsAgg3EAAaDDQ4MTMwOTYyMjg5MiIM0CxZSchPnKLcrnVnKskCxQDA%2By17Fe69PQD%2BkNqGlw4Riahf4vHzlSvCINAL6qpbcR3PU0iAARB05qSBQ0NH1D0z1aDlZiQSh4i74i62nTJeFJCELEu5JJ%2FyCPz6K6z88tUeY7wKR2JoQ3gJ1Xruq0cZEX%2BtKLqUdJG2%2FD0%2FzA2VHPNE7WTVb%2FYAuKBYy3oIo6QoWVHNST9vJvbc9Ersbg9i0bS0cdcW4SY3BnqicZx6ttbMkS5WglKjOk5gmchtPWUm9VH2XpdsFBOXXTHyQ1qFQeDVVTfqWRfCxIhpA%2BLT%2Bp6S8DGXg%2FIT6y3klNyR%2FUPbDf29KbDdDtTCXy5QQmWTwkNNtfP%2BQfsZSbOs1kwqU3nfONMdx9hGyPeiDh6MooDZ6Jt1eifyvCp1JJ6n1RNxIf0H4hrZ5M3KeChiwDvKIotyi6fsTnGr6VVIydvYlM9EjJOHfR4w4ZKKvQY6tAIQn5cMBQbt%2BAwmzydGkZ3%2FF5MCQ97xr%2FCBO7Ts0drJLUbUpGG81VkHDS9z0BUTVMIAM0kOOduQP0XyUT0FePUVYHnMohA7CaL7NHnf25LHSLd0KbENazqIUoo5M%2BWxSe68G6UJqkdZrOA1wNmhWulKRtYDfVw2cebKWR%2FpcSfY8uhZaloqFwEFDHDeSS7vNWu1P3EQeSQVRgito00PY0n1jkaLNE6Lj7JBuXkmXncEuVUWnDBXtyBeKZ80UqEH%2FFQQw84UOCJWT9tVIZxsuZYwUnGnnZnskORzretQ3MS0zB%2FeFwPki6XNo7T7MJvaot3mnd%2FB62xQqrVwAuQ2730XmrWMhleW4Qp8nhEzmPD7KXZfMWqrIoVEhZPc8K4UcECtmrSA9ezSRoRQSrAMfJmiTfr9EA%3D%3D&X-Amz-Signature=ba0a2c04f60c4899f08fa25d868896b36df4158edceae0416a4eba204b486b32&X-Amz-SignedHeaders=host&response-content-disposition=inline"
                style={{ width: '80%', height: '90%', border: 'none', paddingTop: '80px'}}
                title="OMR PDF"
            />
        </div>
    );
};

export default OMR;
