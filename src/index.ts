export
function snafu(x: number) {
    if (x == 3)
    {
        return '1='
    }
    else if (x == 4)
    {
        return '1-'
    }
    else
    {
        return x.toString();
    }
}

