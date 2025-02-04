import React from 'react';
import "../OMR.css";

const Scope = () => {
    return (
        <div className="main" style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <iframe 
                src="https://okincbucket.s3.us-east-1.amazonaws.com/ScopeOfServices?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAXAECKAJWGMT5J5YP%2F20250204%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250204T224330Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLWVhc3QtMSJHMEUCIQDcgBCntCALANpeZG9eezLCSanytllFFAwAc%2B55PiR6YAIgG9U76YjfbJas2IhAB9u2JIkvlUHvEglNq8lgpvuKtYoq7AIIOBAAGgw0ODEzMDk2MjI4OTIiDMp%2BK9sjy6tfqViReCrJAsN%2BSvu3YkvuaQQWoo4olnFqD29ha%2B38pHpzwQAfyRmWi%2BNmSJNiPEHAke0mJarB%2FxOF4azpdwuNA7wggYkUXBIEPlvz4eF5iUjZTwkBVO6Ix25hJVRLLAvO%2FexR675ACUU0xfeKmH9guEqmsb4smlJnCRTaf5W0nHVEnKgxbpNOqjqX%2F0UIpjj5qKXeyrv2OWarpFs%2F2s0%2FNmTBZppYK4l1anLli%2FEXtUlX6PnOTUvYwr%2B885r5jPKlFBgHRvdfgpbcm27sS9FjAWpT1rw%2BNofiWeNxsPHX6l25DTvXvHmr6MHagYOWHwwpE41gzmu99Spw8TEcKjfec%2FVCYyu%2BxnlPnQ7XfhL5KYZ6%2Fy9lbzujFlNwfWVYzQfMzBJogaLXSMgS8vUOK8Ur5O539Z5tcZgtIZebl6vxXI3%2FTML2ZcH0KRJkz9qbWbB1MOGSir0GOrMCFG0GF297vNcov1C6snafww10zf7ZycmaoF0qtce%2F2ilidKGWQ9v%2BiSTXTM%2Fg5NRGBfnR3DFklLwHR4uX1e85MCsBlYjZalC4hIIlortDCBwPv5fPW3WVwLfdLPo5XEJVr0bu8D8xbBJVsulhSnNDwoEedrBLPZy64uyJs6uv9QtGzKchrszM4tN%2F8oPbyD7L6oL%2FPj2BBY9xg5sEJWrhyeTKrW9Kjkl0WxRRRxqgU3EoJyFT6GqfLDZfhyK24kkEC511QcqM0vWl2ESF810gHhlpQEnEPAJkkNnKragFuokwEhiw2zDSr7dDxwP4lSxQXCtyGc94rBvZwAQsfOW54A8PzPWP%2Fqn4468%2FuvF87e0uJmjUwCuarW5yWwtK56phUEWLotxF3XQipCemw8L0oT%2FL0Q%3D%3D&X-Amz-Signature=766dfce46a42ce3b7169a06e5fcfb2cd40dccc90011cf2a4ac68ea4b492c8945&X-Amz-SignedHeaders=host&response-content-disposition=inline"
                style={{ width: '80%', height: '90%', border: 'none', paddingTop: '80px'}}
                title="OMR PDF"
            />
        </div>
    );
};

export default Scope;
