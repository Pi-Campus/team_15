'use strict';

const e = React.createElement;

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text:""
        }
    }
    postData(url = 'https://api.askdata.com/smartinsight/data/nl/result', query = '') {
        // Default options are marked with *
        return fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 3b1e9cc2-f1a1-4109-ab5c-057f2d86a629'
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body:JSON.stringify({
                nl:query,
                language:"en"
            })
    }).then(d=>d.json())
    }

    render() {

        return e(
            'input',
            {
                onKeyUp:(e)=>{
                    if(e.keyCode === 13){
                        loading()
                        this.postData('https://api.askdata.com/smartinsight/data/nl/result',this.state.text).then(d=>{
                            loadData(d)
                        })
                    }
                },
                onChange:(e)=>{
                    this.setState({
                        text:e.target.value.trim()
                    })
                }
            }
        );
    }
}

const contenitoreDom = document.querySelector('#input');
ReactDOM.render(e(Input), contenitoreDom);