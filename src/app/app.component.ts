// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Component, ElementRef, ViewChild } from '@angular/core';
import { IHttpPostMessageResponse } from 'http-post-message';
import { IReportEmbedConfiguration, models, Page, Report, service, VisualDescriptor } from 'powerbi-client';
import { errorClass, errorElement, hidden, position, reportUrl, successClass, successElement } from '../constants';
import { AppService } from 'src/app/services/appservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isEmbedded = false;
  phasedEmbeddingFlag = false;
  embeddedToken: any;

  constructor(private appservice: AppService
  ) {

  }

  reportConfig: IReportEmbedConfiguration = {
    type: 'report',
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined,
    settings: {
      filterPaneEnabled: false,
      navContentPaneEnabled: false
    }
  };


  EntireTeamActive: IReportEmbedConfiguration = {
    type: 'report',
    embedUrl: '',
    tokenType: models.TokenType.Embed,
    accessToken: undefined
  };
  EntireTeamGraphEachMonth: IReportEmbedConfiguration = {
    type: 'report',
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined
  };
  EntireTeamComparePYear: IReportEmbedConfiguration = {
    type: 'report',
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined
  };
  EntireTeamActiveS: IReportEmbedConfiguration = {
    type: 'report',
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined
  };
  YearOverviewForACtiveSubscriptionpoint5: IReportEmbedConfiguration = {
    type: 'report',
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined
  };

  EntireTeamActive1: IReportEmbedConfiguration = {
    type: 'report',
    embedUrl: '',
    tokenType: models.TokenType.Embed,
    accessToken: undefined
  };
  EntireTeamGraphEachMonth1: IReportEmbedConfiguration = {
    type: 'report',
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined
  };
  EntireTeamComparePYear1: IReportEmbedConfiguration = {
    type: 'report',
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined
  };
  EntireTeamActiveS1: IReportEmbedConfiguration = {
    type: 'report',
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined
  };
  YearOverviewForACtiveSubscriptionpoint51: IReportEmbedConfiguration = {
    type: 'report',
    embedUrl: undefined,
    tokenType: models.TokenType.Embed,
    accessToken: undefined
  };

  ngOnInit() {
    debugger
    this.appservice.readFile().subscribe(
      (res: any) => {
        this.embeddedToken = res.accessToken;
        if (this.embeddedToken) {
          this.getReports();
        }
      });

  }

  getReports() {
    debugger
    this.EntireTeamActive = {
      ...this.reportConfig,
      embedUrl:"https://app.powerbi.com/reportEmbed?reportId=890ba244-d880-4399-97c1-4e8d5be3b580&groupId=01ff8a9b-e6f9-4f6c-9714-06c66a7309bb&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUQtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImFuZ3VsYXJPbmx5UmVwb3J0RW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFpvbmVQYXRjaCI6dHJ1ZX19&filter=tKunden/TPId",
      id: "890ba244-d880-4399-97c1-4e8d5be3b580",
      accessToken: this.embeddedToken,
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: false
      }
    };

    this.EntireTeamGraphEachMonth = {
      ...this.reportConfig,
      embedUrl:"https://app.powerbi.com/reportEmbed?reportId=f195e4c8-06d5-4601-a34b-c89502075447&groupId=01ff8a9b-e6f9-4f6c-9714-06c66a7309bb&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUQtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImFuZ3VsYXJPbmx5UmVwb3J0RW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFpvbmVQYXRjaCI6dHJ1ZX19&filter=tKunden/TPId",
      id: "f195e4c8-06d5-4601-a34b-c89502075447",
      accessToken: this.embeddedToken,
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: false
      }
    };

    this.EntireTeamComparePYear = {
      ...this.reportConfig,
      embedUrl:"https://app.powerbi.com/reportEmbed?reportId=6795603e-76fd-4a57-acc4-ed997ff1e1da&groupId=01ff8a9b-e6f9-4f6c-9714-06c66a7309bb&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUQtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImFuZ3VsYXJPbmx5UmVwb3J0RW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFpvbmVQYXRjaCI6dHJ1ZX19&filter=tKunden/TPId",
      id: "6795603e-76fd-4a57-acc4-ed997ff1e1da",
      accessToken: this.embeddedToken,
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: false
      }
    };

    this.EntireTeamActiveS = {
      ...this.reportConfig,
      embedUrl:"https://app.powerbi.com/reportEmbed?reportId=39d00e57-40f8-49a9-9961-2202f6d444ad&groupId=01ff8a9b-e6f9-4f6c-9714-06c66a7309bb&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUQtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImFuZ3VsYXJPbmx5UmVwb3J0RW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFpvbmVQYXRjaCI6dHJ1ZX19&filter=TPDownLine/TPId",
      id: "39d00e57-40f8-49a9-9961-2202f6d444ad",
      accessToken: this.embeddedToken,
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: false
      }
    };

    this.YearOverviewForACtiveSubscriptionpoint5 = {
      ...this.reportConfig,
      embedUrl:"https://app.powerbi.com/reportEmbed?reportId=d32432e8-5035-4fd5-9a99-97382deeb334&groupId=01ff8a9b-e6f9-4f6c-9714-06c66a7309bb&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUQtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImFuZ3VsYXJPbmx5UmVwb3J0RW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFpvbmVQYXRjaCI6dHJ1ZX19&filter=TPDownLine/TPId",
      id: "d32432e8-5035-4fd5-9a99-97382deeb334",
      accessToken: this.embeddedToken,
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: false
      }
    };
    //this.EntireTeamActiveSComparePYear = {
    //  ...this.reportConfig,
    //  embedUrl:"https://app.powerbi.com/reportEmbed?reportId=d32432e8-5035-4fd5-9a99-97382deeb334&groupId=01ff8a9b-e6f9-4f6c-9714-06c66a7309bb&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUQtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImFuZ3VsYXJPbmx5UmVwb3J0RW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFpvbmVQYXRjaCI6dHJ1ZX19&filter=TPDownLine/TPId eq '1234'",
    //  id: "6a741414-be56-4019-b536-60daf29507b2",
    //  accessToken: this.embeddedToken,
    //  settings: {
    //    filterPaneEnabled: false,
    //    navContentPaneEnabled: false
    //  }
    //};
    //this.EntireTeamActiveSComparePYear = {
    //  ...this.reportConfig,
    //  embedUrl:"https://app.powerbi.com/reportEmbed?reportId=f8eb6285-18f1-410c-8eec-c7cdc9adc185&groupId=01ff8a9b-e6f9-4f6c-9714-06c66a7309bb&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUQtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImFuZ3VsYXJPbmx5UmVwb3J0RW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFpvbmVQYXRjaCI6dHJ1ZX19&filter=tKunden/Sponsor eq '1234'",
    //  id: "6a741414-be56-4019-b536-60daf29507b2",
    //  accessToken: this.embeddedToken,
    //  settings: {
    //    filterPaneEnabled: false,
    //    navContentPaneEnabled: false
    //  }
    //};


    this.EntireTeamActive1 = {
      ...this.reportConfig,
      embedUrl: "https://app.powerbi.com/reportEmbed?reportId=890ba244-d880-4399-97c1-4e8d5be3b580&groupId=01ff8a9b-e6f9-4f6c-9714-06c66a7309bb&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUQtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImFuZ3VsYXJPbmx5UmVwb3J0RW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFpvbmVQYXRjaCI6dHJ1ZX19&filter=tKunden/TPId",
      id: "890ba244-d880-4399-97c1-4e8d5be3b580",
      accessToken: this.embeddedToken,
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: false
      }
    };

    this.EntireTeamGraphEachMonth1 = {
      ...this.reportConfig,
      embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f195e4c8-06d5-4601-a34b-c89502075447&groupId=01ff8a9b-e6f9-4f6c-9714-06c66a7309bb&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUQtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImFuZ3VsYXJPbmx5UmVwb3J0RW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFpvbmVQYXRjaCI6dHJ1ZX19&filter=tKunden/TPId",
      id: "f195e4c8-06d5-4601-a34b-c89502075447",
      accessToken: this.embeddedToken,
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: false
      }
    };

    this.EntireTeamComparePYear1 = {
      ...this.reportConfig,
      embedUrl: "https://app.powerbi.com/reportEmbed?reportId=6795603e-76fd-4a57-acc4-ed997ff1e1da&groupId=01ff8a9b-e6f9-4f6c-9714-06c66a7309bb&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUQtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImFuZ3VsYXJPbmx5UmVwb3J0RW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFpvbmVQYXRjaCI6dHJ1ZX19&filter=tKunden/TPId",
      id: "6795603e-76fd-4a57-acc4-ed997ff1e1da",
      accessToken: this.embeddedToken,
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: false
      }
    };

    this.EntireTeamActiveS1 = {
      ...this.reportConfig,
      embedUrl: "https://app.powerbi.com/reportEmbed?reportId=39d00e57-40f8-49a9-9961-2202f6d444ad&groupId=01ff8a9b-e6f9-4f6c-9714-06c66a7309bb&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUQtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImFuZ3VsYXJPbmx5UmVwb3J0RW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFpvbmVQYXRjaCI6dHJ1ZX19&filter=TPDownLine/TPId",
      id: "39d00e57-40f8-49a9-9961-2202f6d444ad",
      accessToken: this.embeddedToken,
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: false
      }
    };

    this.YearOverviewForACtiveSubscriptionpoint51 = {
      ...this.reportConfig,
      embedUrl: "https://app.powerbi.com/reportEmbed?reportId=d32432e8-5035-4fd5-9a99-97382deeb334&groupId=01ff8a9b-e6f9-4f6c-9714-06c66a7309bb&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUQtUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWUsImFuZ3VsYXJPbmx5UmVwb3J0RW1iZWQiOnRydWUsImNlcnRpZmllZFRlbGVtZXRyeUVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZSwic2tpcFpvbmVQYXRjaCI6dHJ1ZX19&filter=TPDownLine/TPId",
      id: "d32432e8-5035-4fd5-9a99-97382deeb334",
      accessToken: this.embeddedToken,
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: false
      }
    };

  }
}
