'use strict';

class Table extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.loading){
            return "Loading..."
        }
        return e(
            "table",
            {className:"table"},
            e("tbody", {},
                // headings
                [e("tr",{},
                    this.props.res.schema.map(i=>e('td',{},i.name))
                ),
                    ...this.props.res.data.map(i=>e('tr',{},
                        i.cells.map(k=>e('td',{},k.value))))]
            )
        )
    }
}

function loading() {
    ReactDOM.render(e(Table, {loading:true}), document.querySelector('#results'));
}
function loadData(data) {
    ReactDOM.render(e(Table, {res: data,loading:false}), document.querySelector('#results'));
}