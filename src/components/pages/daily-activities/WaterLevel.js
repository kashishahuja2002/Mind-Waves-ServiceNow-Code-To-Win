import React, { Component } from 'react';

import { color } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';
import LiquidFillGauge from 'react-liquid-gauge';

class WaterLevel extends Component {
    startColor = '#3e98c7';
    endColor = '#80c5de';

    render() {
        const radius = 130;
        const interpolate = interpolateRgb(this.startColor, this.endColor);
        const fillColor = interpolate(this.props.waterLevel / 100);
        const gradientStops = [
            {
                key: '0%',
                stopColor: color(fillColor).darker(0.5).toString(),
                stopOpacity: 1,
                offset: '0%'
            },
            {
                key: '50%',
                stopColor: fillColor,
                stopOpacity: 0.75,
                offset: '50%'
            },
            {
                key: '100%',
                stopColor: color(fillColor).brighter(0.5).toString(),
                stopOpacity: 0.5,
                offset: '100%'
            }
        ];

        return (
            <LiquidFillGauge
                style={{
                    margin: '0 auto', 
                    border: "0px solid white",
                    cursor: 'pointer'
                }}
                width={radius * 2}
                height={radius * 2}
                value={this.props.waterLevel}
                textSize={1}
                textOffsetX={0}
                textOffsetY={0}
                textRenderer={(props) => {
                    const radius = Math.min(props.height / 2, props.width / 2);
                    const textPixels = (props.textSize * radius / 2);
                    const valueStyle = {
                        fontSize: textPixels
                    };
                    const percentStyle = {
                        fontSize: textPixels * 0.6
                    };

                    return (
                        <tspan>
                            <tspan className="value" style={valueStyle}>{this.props.waterLevel / 10}</tspan>
                            <tspan style={percentStyle}>/10</tspan>
                            <tspan>Glasses</tspan>
                        </tspan>
                    );
                }}
                riseAnimation
                waveAnimation
                waveFrequency={2}
                waveAmplitude={1}
                gradient
                gradientStops={gradientStops}
                outerRadius={1}
                innerRadius={0.96}
                circleStyle={{
                    fill: "#3e98c7",
                }}
                waveStyle={{
                    fill: fillColor
                }}
                textStyle={{
                    fill: color('#444').toString(),
                    fontFamily: 'Arial'
                }}
                waveTextStyle={{
                    fill: color('#fff').toString(),
                    fontFamily: 'Arial'
                }}
                onClick={this.props.onClick}
            />
        );
    }
}
export default WaterLevel;