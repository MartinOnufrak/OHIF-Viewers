import React from 'react';
import AreaChart from './Charts/AreaChart';
import ScatterChart from './Charts/ScatterChart';
import { useLocation } from 'react-router';
import { useNavigate } from 'react-router-dom';
import {hotkeys} from "@ohif/core";
import { useState, useEffect, useMemo } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { Link, } from 'react-router-dom';
import moment from 'moment';
import qs from 'query-string';
import isEqual from 'lodash.isequal';
import { useTranslation } from 'react-i18next';
//
import filtersMeta from './filtersMeta.js';
import { useAppConfig } from '@state';
import { useDebounce, useSearchParams } from '@hooks';
import { utils, ServicesManager } from '@ohif/core';
import './Styles/ChartsPage.css'; // Import the CSS file


import {
    Icon,
    StudyListExpandedRow,
    LegacyButton,
    EmptyStudies,
    StudyListTable,
    StudyListPagination,
    StudyListFilter,
    TooltipClipboard,
    Header,
    useModal,
    AboutModal,
    UserPreferences,
    LoadingIndicatorProgress,
    useSessionStorage,
    Button,
    ButtonEnums,
} from '@ohif/ui';

import i18n from '@ohif/i18n';
import hotkeysManager from "@ohif/core/src/classes/HotkeysManager";
import {SILVER} from "../utils/chartsUtils";

const { sortBySeriesDate } = utils;

const { availableLanguages, defaultLanguage, currentLanguage } = i18n;

const seriesInStudiesMap = new Map();

const ChartsPage: React.FC = (props) => {
  const { state } = useLocation();
  const navigate = useNavigate();
    const { show, hide } = useModal();
    const { t } = useTranslation();
    const [appConfig] = useAppConfig();
    const versionNumber = process.env.VERSION_NUMBER;
    const commitHash = process.env.COMMIT_HASH;

    const menuOptions = [
        {
            title: t('Header:About'),
            icon: 'info',
            onClick: () =>
                show({
                    content: AboutModal,
                    title: t('AboutModal:About OHIF Viewer'),
                    contentProps: { versionNumber, commitHash },
                }),
        },
    ];

    if (appConfig.oidc) {
        menuOptions.push({
            icon: 'power-off',
            title: t('Header:Logout'),
            onClick: () => {
                navigate(`/logout?redirect_uri=${encodeURIComponent(window.location.href)}`);
            },
        });
    }

    return (
    <div>
        <Header
            isSticky
            menuOptions={menuOptions}
            isReturnEnabled={false}
            WhiteLabeling={appConfig.whiteLabeling}
        />
      <Button
        disabled={false}
        startIconTooltip={null}
        startIcon={
          <Icon
            className="!h-[20px] !w-[20px] text-black"
            name={'launch-arrow'}
          />
        } // launch-arrow | launch-info
        onClick={() => {
          navigate('/MainPage', { replace: true });
        }}
        className={'text-[13px]'}
      >
        {'Home'}
      </Button>
        <div className={'chartContainer'}>
          <div className={'chart'}>
            <ScatterChart mrn={state.mrn} />
          </div>
            <div className={'description'}>
                Visualisation by patients' right ventricular end-systolic-volume and end-diastolic-volume with filtering based on calculated ejection fraction.
            </div>
        </div>
        <div className={'chartContainer'}>
            <div className={'description'}>
                Distribution of patients by their right ventricular ejection fraction.
            </div>
            <div className={'chart'}>
                <AreaChart mrn={state.mrn} />
            </div>
        </div>
    </div>
  );
};

export default ChartsPage;
