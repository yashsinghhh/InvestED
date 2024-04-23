"use client";
import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { formatMarketCap } from "@/utils/Function/BillionConvertor";
import { useCompanyInfo } from "@/utils/Hooks/useCompanyInfo";
import DetailSectionLoader from "../Loader/DetailSectionLoader";
import ErrorComponent from "../Errors/Error";

const DetailSection = ({ TikerValue }) => {
  const { data: info, isError, isLoading, error } = useCompanyInfo(TikerValue);
  if (isLoading) return <DetailSectionLoader />;

  return (
    <div className="w-full  flex">
      {isError ? (
        <ErrorComponent error={error} />
      ) : (
        <Card className="w-full">
          {!info || Object.keys(info).length === 0 ? (
            <>
              <CardHeader className="text-red-500">
                <CardTitle className="text-3xl font-extrabold text-center">
                  {TikerValue} Company Not Found {":("}
                </CardTitle>
                <CardDescription className="text-center">
                  Please! try again or search for another company.
                </CardDescription>
              </CardHeader>
            </>
          ) : (
            <>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-thin">
                    COMPANY<span className="text-[12px]">(Symbol)</span>
                  </span>
                  <span className="text-sm font-thin">COUNTRY</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">
                    {info?.Name}
                    <span className="text-[12px]">{`(${info?.Symbol})`}</span>
                  </span>
                  <span className="text-sm font-medium">{info?.Country}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-thin">CURRENCY</span>
                  <span className="text-sm font-thin">EXCHANGE</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">{info?.Currency}</span>
                  <span className="text-sm font-medium">{info?.Exchange}</span>
                </div>

                <div className="text-sm text-muted-foreground border-t py-2">
                  <div className="flex gap-4 items-center">
                    <Badge className="text-[12px] rounded-full text-white">
                      SECTOR : {info?.Sector}
                    </Badge>
                    <Badge className="text-[12px]  rounded-full text-white">
                      INDUSTRY: {info?.Industry}
                    </Badge>
                  </div>
                  <div className="flex justify-start items-center flex-wrap pt-4 gap-4">
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-sm font-thin">DESCRIPTION</span>
                    </div>
                    {info?.Description}
                    <div className="flex justify-start items-center flex-wrap pt-4 gap-4">
                      <Card className="flex-col flex justify-center items-center">
                        <CardHeader>
                          <CardTitle>Market Cap:</CardTitle>
                          <CardDescription className="text-primary">
                            {formatMarketCap(
                              Number(info?.MarketCapitalization)
                            )}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card className="flex-col flex justify-center items-center">
                        <CardHeader>
                          <CardTitle> EBITDA:</CardTitle>
                          <CardDescription className="text-primary">
                            {formatMarketCap(Number(info?.EBITDA))}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card className="flex-col flex justify-center items-center">
                        <CardHeader>
                          <CardTitle> PEG Ratio:</CardTitle>
                          <CardDescription className="text-primary">
                            {info?.PEGRatio}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card className="flex-col flex justify-center items-center">
                        <CardHeader>
                          <CardTitle> Dividend Yield:</CardTitle>
                          <CardDescription className="text-primary">
                            {info?.DividendYield}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card className="flex-col flex justify-center items-center">
                        <CardHeader>
                          <CardTitle> EPS:</CardTitle>
                          <CardDescription className="text-primary">
                            {info?.EPS}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card className="flex-col flex justify-center items-center">
                        <CardHeader>
                          <CardTitle> Analyst Target Price:</CardTitle>
                          <CardDescription className="text-primary">
                            ${info?.AnalystTargetPrice}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card className="flex-col flex justify-center items-center">
                        <CardHeader>
                          <CardTitle>52 Week High:</CardTitle>
                          <CardDescription className="text-primary">
                            ${info?.["52WeekHigh"]}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card className="flex-col flex justify-center items-center">
                        <CardHeader>
                          <CardTitle>52 Week Low:</CardTitle>
                          <CardDescription className="text-primary">
                            ${info?.["52WeekLow"]}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card className="flex-col flex justify-center items-center">
                        <CardHeader>
                          <CardTitle>50 Day Moving Average:</CardTitle>
                          <CardDescription className="text-primary">
                            ${info?.["50DayMovingAverage"]}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card className="flex-col flex justify-center items-center">
                        <CardHeader>
                          <CardTitle>200 Day Moving Average:</CardTitle>
                          <CardDescription className="text-primary">
                            ${info?.["200DayMovingAverage"]}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                      <Card className="flex-col flex justify-center items-center">
                        <CardHeader>
                          <CardTitle>50 Day Moving Average:</CardTitle>
                          <CardDescription className="text-primary">
                            ${info?.["50DayMovingAverage"]}
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </>
          )}
        </Card>
      )}
    </div>
  );
};

export default DetailSection;
