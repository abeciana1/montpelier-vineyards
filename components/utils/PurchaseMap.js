import React from 'react';
import { MapsComponent, LayersDirective, NavigationLineDirective, LayerDirective, Zoom, MarkersDirective, NavigationLine, NavigationLinesDirective, MarkerDirective, Marker, Inject } from '@syncfusion/ej2-react-maps';



// const PurchaseMap = () => {

class PurchaseMap extends React.Component {

    render() {
        // console.log(this.props)

        const { locations } = this.props;

        return (
            <MapsComponent id="maps" zoomSettings={{ zoomFactor: 9, enable: true, toolbars: ['Zoom', 'ZoomIn', 'ZoomOut'] }} centerPosition={{ latitude: 44.4937929, longitude: -72.8773081 }}>
                <Inject services={[Marker, NavigationLine, Zoom]}/>
                <LayersDirective>
                    <LayerDirective layerType='OSM' />
                        <MarkersDirective>
                                <MarkerDirective fill="blue" shape="Circle" visible={true} height={10} width={10} animationDuration={0} border={{ width: 2, color: '#333' }} dataSource={
                            locations.map((location) => {
                                return (
                                    {
                                        latitude: location.locationGeoCoords.latitude,
                                        longitude: location.locationGeoCoords.longitude,
                                        name: location.locationTitle
                                    }
                                )
                            })
                                }></MarkerDirective>
                            <NavigationLinesDirective>
                                <NavigationLineDirective
                                    visible={true} latitude={[34.060620, 40.724546]} longitude={[-118.330491, -73.850344]} color="blue" angle={90} width={5}
                                />
                            </NavigationLinesDirective>
                        </MarkersDirective>
                </LayersDirective>
            </MapsComponent>
        )
    }
}



// }

export default PurchaseMap