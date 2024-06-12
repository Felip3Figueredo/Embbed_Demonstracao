// const embedUrl = 'https://app.powerbi.com/reportEmbed?reportId=f0200949-501f-44e0-bc78-3f47273466cc&groupId=ef50c458-ed4c-4962-9224-c5b3551edb3e';
// const embedToken = 'H4sIAAAAAAAEAC3Ttw6sWAIE0H95KSthG-iVJsB7aLzJ8NB4c3Gj_fdtjSavoHRU9fefT3r3U1r8-e-fhG1U-ikkUgwy73srGHinVxtb2njhC6qABBS738Ilp7Pm3DVZrKzavqK1Ljqhk-nhJ7t1ctAkJ-srwqLkp_xelSGRBgm7mKqucKsWpRa98EB7dNtvehqcN3a9DUSvJSGacR1mv_oUqqD7pvBKrMH2uE7zWqyEZYBdysbnJXzTCSHJNgd9Nly4YBOzJRXnLfC7nXBvO32UKgmX_kzPu7m0b01XoUpxTACPb5pJ5xZZWpgx_NOkiqcWJ1q6U61uvZsgGbapHlS1xnEYsi94MS_KhQVT5BksF0Z-qA3tByWnDNU2cYq4LKy8wLN_OVNQnhDMAcOqIJ-LzpVQBfMjN_ouvU8mRPzWKJykGgq7ogxmrsmuUwIJrKEKYATXgHrAK6CtJ4mCW1kILd8yOSu5xZPYViZdMy1O9wAqTeQh_TTCmYxAi0XG04gY4Ae09KZp1lKtiQLtQcQZhmNCe1Jgh_Ws9b-iTWdv-a8dLQqbcyDhBqEA7F7PFMMIzYZroLcpdeAcBaZqtoo7TRZfS-ql7ZCeId5x3RHizvunobuNgk1F_JhJigfKauk93ijjMYi8fqpMLZjdyN2v1lYNLs17Qb4qsuvgGIqtEq_LRQ6HS_YqihruADdcrGQ_OCSnu4qkdHYCpi9SuTHUm2Gw_UCz2yViVbqhvlUHIJLDPqw4nj29OIeBw2oBRketOZHim9YCdjtSJ9B_nD2a5HTk72Zb-OF959JZBVUs6ny2hliSGvpFkm9S5AgvreY1R6CAD4jStth-WkKt-9bYkx6BtDf81hHM13IT_d639s3ikbrk3sT3mq0wa8lCCaWIx7pdaUqHtcSf1gfv3kbLmys9iBlJUU46R_Vff_35zx9uved90sr7d7PPeEi3veg1NNprRetIdeV1gXq0q33349s-RCq1rzms3tw3GIIg792sdtu6mE501ODvXCzvq8I89iaBy2bMoHxImBdMgwRzyEv4jg-dta92q0K9w3DvrcNR8GbRQoJd2T2eDpo-dDPhBei5ikZ2Wpj7E9jCi-aEu7_GmD2zov6tqgCQ0SULxD2LqU8Mlb6MvZKc2yFmpCcmeCNn_Ex2Bcd20NKBAk-94AEqnF6QbLnO--alLZijuCPKqkfD-HPZS71lKx980qSv_RKWCyls38RyvRy5OaSckdWHHF2pP3V1G97daPAacli5Gz9s2cxLRonGfJk-LhEk9aohHyL6hJmNYP6X-Z6bclWCnzJisZGIIAW3zV6yUK_e4Kzj_Cf1sxzTHazlL2aeHhpRBBkAqzCVGhs2rRuDJQhGbKusDrEeLBRFdEiQboKCQRA3AnL5ftJjdBEsM_Vugd3d1a3FwVKjLfFLWfcynIPnM4-QW82FjGH6Z6Yr5YOaZONmzgnHKyxKz3mBXgdiAsYIBh0SjmNp-gZzJfmV9M6pVeLGcmOpQR4UN0RpHlMe8lg9PQ7uR5YRUpglfI6qVRVTQjvyU6at7MdiLEbvKHDCPI6QmZveVdYoVkH7uV_cTQ46bjQN2Lh5n7KhwXgCbmif7VklksN8zPS9vSe5Mfl2TjU5piPc0cWHidx5C4k5Xsry0s5Mo1VP2ZwjDoTjyFeiFIrc6UsRMdGeERRmfsz_-z856R01WgYAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUJSQVpJTC1TT1VUSC1CLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJleHAiOjE3MTgyMDc4OTYsImFsbG93QWNjZXNzT3ZlclB1YmxpY0ludGVybmV0Ijp0cnVlfQ==';
// const reportId = 'f0200949-501f-44e0-bc78-3f47273466cc';

// // Configurações de incorporação do Power BI
// const models = window['powerbi-client'].models;

// const config = {
//     type: 'report',
//     tokenType: models.TokenType.Embed,
//     accessToken: embedToken,
//     embedUrl: embedUrl,
//     id: reportId,
//     permissions: models.Permissions.All,
//     settings: {
//         filterPaneEnabled: false,
//         navContentPaneEnabled: true,
//         layoutType: models.LayoutType.MobilePortrait
//     }
// };

// // Obtém o elemento DOM onde o relatório será incorporado
// const reportContainer = document.getElementById('reportContainer');

// // Incorpora o relatório
// const report = powerbi.embed(reportContainer, config);

// // Evento para lidar com o carregamento do relatório
// report.on('loaded', function() {
//     console.log('Relatório carregado');
// });

// // Evento para lidar com erros
// report.on('error', function(event) {
//     console.error(event.detail);
// });

function applyValues() {
    const embedUrl = document.getElementById('embedUrl').value;
    const embedToken = document.getElementById('embedToken').value;
    const reportId = document.getElementById('reportId').value;

    // Configurações de incorporação do Power BI
    const models = window['powerbi-client'].models;


    const isMobile = window.innerWidth < 768;

    // Configuração base
    const config = {
        type: 'report',
        tokenType: models.TokenType.Embed,
        accessToken: embedToken,
        embedUrl: embedUrl,
        id: reportId,
        permissions: models.Permissions.All,
        settings: {
            filterPaneEnabled: false,
            navContentPaneEnabled: true
        }
    };

    // Adiciona layoutType se não for dispositivo móvel
    if (isMobile) {
        config.settings.layoutType = models.LayoutType.MobilePortrait;
    }

    // const config = {
    //     type: 'report',
    //     tokenType: models.TokenType.Embed,
    //     accessToken: embedToken,
    //     embedUrl: embedUrl,
    //     id: reportId,
    //     permissions: models.Permissions.All,
    //     settings: {
    //         filterPaneEnabled: false,
    //         navContentPaneEnabled: true,
    //         layoutType: models.LayoutType.MobilePortrait
    //     }
    // };

    // Replace the form with the report container
    document.getElementById('formContainer').style.display = 'none';
    document.getElementById('reportContainer').style.display = 'block';

    // Obtém o elemento DOM onde o relatório será incorporado
    const reportContainer = document.getElementById('reportContainer');

    // Incorpora o relatório
    const report = powerbi.embed(reportContainer, config);

    // Evento para lidar com o carregamento do relatório
    report.on('loaded', function() {
        console.log('Relatório carregado');
    });

    // Evento para lidar com erros
    report.on('error', function(event) {
        console.error(event.detail);
    });

}
