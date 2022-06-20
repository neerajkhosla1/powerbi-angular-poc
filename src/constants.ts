// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// Success Image element
const successElement = document.createElement('img');
successElement.className = 'status-img';
successElement.src = '/assets/success.svg';

// Error Image element
const errorElement = document.createElement('img');
errorElement.className = 'status-img';
errorElement.src = '/assets/error.svg';

// Endpoint to get report config
const reportUrl = 'https://aka.ms/CaptureViewsReportEmbedConfig';
//const reportUrl = 'https://app.powerbi.com/reportEmbed?reportId=804146a2-51cf-471f-8862-61751ee5a65b&autoAuth=true&ctid=cffa1ae5-a2db-44a7-84d2-d1df5908dfbb&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXdlc3QtZXVyb3BlLWQtcHJpbWFyeS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D';

const errorClass = 'error';
const successClass = 'success';

// To show / hide the report container
const hidden = 'hidden';

// To position the display message
const position = 'position';

export { errorClass, errorElement, hidden, position, reportUrl, successClass, successElement };
