#include <opencv2/opencv.hpp>
#include <iostream>
using namespace cv;
using namespace std;

int main() {
    Mat img = imread("input.jpg", IMREAD_COLOR); //carrega a imagem com cor.
    Mat resized;
    
    /*if(valor != valOriginal && valEsperado > valor){ //aumentar
    ^ sao todos pseudovariaveis!! 
    aqui, valor e o seu ultimo valor(retornado antes de realizar o proximo zoom), 
    valorOriginal o original e valor esperado o esperado.(deve ser diferente de 0!!)*/

    resize(img, resized, Size(), 2.0, 2.0, INTER_LANCZOS4); 
    /*aumenta de tamanho em 2x como exemplo. Aqui, no valor de 2 seria o valor obtido
    pelo front end.*/

    //}

    /*if(valor != valOriginal && valEsperado < valor){ //diminuir
    ^ sao todos pseudovariaveis!! 
    aqui, valor e o seu ultimo valor(retornado antes de realizar o proximo zoom), 
    valorOriginal o original e valor esperado o esperado.lol.*/

    resize(img, resized, Size(), 2.0, 2.0, INTER_AREA); 
    /*aumenta de tamanho em 2x como exemplo. Aqui, no valor de 2 seria o valor obtido
    pelo front end.*/

    //}

    Mat displayOriginal, displayResized;
    normalize(img64f, displayOriginal, 0, 255, NORM_MINMAX);
    normalize(resized, displayResized, 0, 255, NORM_MINMAX);
    displayOriginal.convertTo(displayOriginal, CV_8UC1);
    displayResized.convertTo(displayResized, CV_8UC1);

    imshow("Resized x2 (High Quality)", resized);//mostra modificado/com zoom

    waitKey(0);

    imwrite("resized_output.png", resized);//salva imagem com tamanho modificado.
}
