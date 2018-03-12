#!/usr/bin/env bash


COMMAND="$1"
shift

case "$COMMAND" in

        dc)
            docker-compose $@
            ;;

        init)
            $0 dc build
            $0 dc run --rm server pip install -r /app/requirements.txt
            $0 dc run --rm client npm i
            ;;

        up)
            $0 dc up
            ;;

        test)
            $0 dc run --rm server python -m unittest discover -s app -v -p "*_test.py"
            ;;

        server)
            $0 dc run --rm server $@
            ;;

        client)
            $0 dc run --rm client $@
            ;;

        clean)
            $0 dc down --rmi local -v
            ;;

        *)
            echo $"Usage: $0 {dc|server|client}"
            exit 1
esac
