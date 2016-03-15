from flask import Flask
from flask import render_template

app = Flask( __name__, static_url_path="/static" )


@app.route( '/' )
def hello_world():
	return render_template( "main.html" )

if( __name__ == "__main__" ):
	app.debug = True
	app.run( port=23765 )
