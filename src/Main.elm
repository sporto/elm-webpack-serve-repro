module Main exposing (..)

import Html exposing (..)
import Sub

main : Html msg
main =
    div []
        [ Html.text "Main 1"
        , Sub.view
        ]
