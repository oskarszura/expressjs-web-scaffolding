const React = require('react')

    , FileDropper = React.createClass({

        allowDrop: e => {

            e.stopPropagation();
            e.preventDefault();
            e.dataTransfer.dropEffect = 'copy';

        }

        , handleOnDrop: e => {

            e.stopPropagation();
            e.preventDefault();

            const files = e.nativeEvent.dataTransfer.files
            , onLoad = file => e => {
                console.log(file.fileName, e.target.result)
            };

            for ( let key in files ) {

                let file = files[key]
                , fileReader = new FileReader();

                fileReader.onload = onLoad(file);
                fileReader.readAsDataURL(file);

            }


        }

        , render: function () {

            return (
                <div className="component-file-dropper"
                     onDrop={this.handleOnDrop}
                     onDragOver={this.allowDrop}>
                    Drop files here...
                </div>
            );

        }

    });

module.exports = FileDropper;