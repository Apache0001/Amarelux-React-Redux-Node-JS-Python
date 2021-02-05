from flask import Flask, render_template, request

app = Flask(__name__, template_folder="./src/views")


@app.route("/", methods=["GET", "POST"])
def home():
    if (request.method == "GET"):
        return render_template("index.html")
    else:
        if (request.form["investimento"] != "" and
                request.form["meses"] != ""):
            invest = request.form["investimento"]
            meses = request.form["meses"]
            rendMensal = 0.008
            calculo = int(invest) * (1+rendMensal)**int(meses)-int(invest)
            vreal = round(calculo, 2)
            return {
                "Olha quanto você pode ganhar no Itaú": "R$ "+str(vreal)
            }
        else:
            return "Erro ao calcular seu investimento :("


@app.errorhandler(404)
def not_found(error):
    return "<h1>404 PÁGINA NÃO ENCONTRADA</h1>"


app.run(port=8080, debug=True)
