import React from 'react';
import "../OMR.css";
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';


const OMR = () => {
    return (
        <div className="main" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe 
                src="https://okincbucket.s3.us-east-1.amazonaws.com/OMR2023?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXAECKAJWOEDIUF36%2F20250204%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250204T225544Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLWVhc3QtMSJHMEUCIDv35cVmykcw%2B7h4ceUt36FZmBuQf3WEC1Azp0zQz%2BHFAiEAyzB0IAhPn63fSempamtmrYi%2FRLc1%2FOl4snLA9o24sIMq7AIIOBAAGgw0ODEzMDk2MjI4OTIiDGmr8MDwoIOtQ9gUzirJAts2iwJhJq%2FdgYKbZfbKiIeVtd9v3zCPydgln4A%2B%2BaazYS%2BqJsVlQ2QgOBnnn2kmYwXGaNzBBK8xdWi7I5cNG0Fnsm1Lae5HlqmyInnwoMhcpY5z%2Fzx2k%2BYjaI0IwoG62FL9HIFKwzNhGnfFqX%2F4XR5pAROSVUZIbrBpfcFf5kStYh83rBtJXylgyso5ujwd3%2FrgeKQU6tOGtH08FEmeZNZ1%2Bx1458wgSgmszK44L2JP3DUIMQmkoHD8q8BUwOYY%2BhlU0CascWuJa%2BAW5rcwDGrTseqq7HsH%2FpQ%2F%2Bu0vYKKTtjVgkJ4ltGAJl1%2BWgBd2JIvCWf8J5fk0%2F3Rzct7spR73CE2jaeWpV8R3OLgB%2Bwr0Z3q7oEFOd0vbYmBVBf61YWIJjwvz21u1lIH%2FiTpp9PDKAvTV8Z6gRFd7gDjBTFy6D3VnX03jX%2FTvMIazir0GOrMCqFYm8XgZLBBlaIwhr9pDHek0NYm6SQTFulsbUaOD3wqqSkS6WXMdXVoORUtAWBvSq%2FtHmUutVTsULnEKiQZDYoMdrCf45usXfzEY6CdRi%2B6xfUBZL5DUzNNJh5%2BDMdcKIVGS1ZeOdanGjYmyBa8FXhAOKM05e%2FImNgoZNjml%2FeFcap4DTirIfirqT6Ce%2B1m199BUTwSTH49QuGRdl3Brwl7bY0HbuvhlgRIxz925l0gDja%2Fvf%2FKlWmwngHVu9Htx4EH8JDLDqJtjHJIaFyxaEqBTVP8rvlc7QdUa9gpRs8LdcLIBSni%2Fs4rHWDfY0GG5bRH5QRHSC3iwTvGR6PXUil0C%2Bosjf%2BF3V6jbgHQSVe%2B2np9xQIZQsCfVL5tLU5HFEbUQeUbt2pm%2FdJ62nH37jdb5Tg%3D%3D&X-Amz-Signature=0192d4dc7bdeaa9a20a490e7d21911491598cbf2c50ec7c5862fd4cb4f69b877&X-Amz-SignedHeaders=host&response-content-disposition=inline"
                
                style={{ width: '80%', height: '90%', border: 'none', paddingTop: '80px'}}
                title="OMR PDF"
            />
        </div>
    );
};

export default OMR;
