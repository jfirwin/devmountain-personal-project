// // @flow
//
import { Control } from 'leaflet'
//
// import { withLeaflet, MapControl } from 'react-leaflet'
//
// type LeafletElement = Control.extend
// type Props = {
//   position?: string,
// } & MapControlProps
//
// class CustomControl extends Control<LeafletElement, Props> {
//   createLeafletElement(props: Props): LeafletElement {
//     return new Control.extend(props)
//   }
//
// }
//
// export default withLeaflet(CustomControl)



import React from 'react';
import ReactDOM from 'react-dom';
import L from 'leaflet';
import { MapControl, withLeaflet } from 'react-leaflet';

type Props = {
  position?: string,
} & MapControlProps

class LegendControl extends MapControl<LeafletElement, Props> {
  createLeafletElement(props: Props): LeafletElement {
    return new Control.extend(props)
  }

  componentWillMount() {
    const legend = L.control({position: 'bottomright'});
    const jsx = (
      <div {...this.props}>
        {this.props.children}
      </div>
    );

    legend.onAdd = function (map) {
      let div = L.DomUtil.create('div', '');
      ReactDOM.render(jsx, div);
      return div;
    };

    this.leafletElement = legend;
  }
}
export default withLeaflet(LegendControl)
