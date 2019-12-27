<?php
session_start();

$validation = '';


// to reset the game
if (isset($_GET['reset']) && $_GET['reset'] == 1)
{
    session_destroy();
    header('Location: index.php');
    $validation = 'Game have been reseted !';
}
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="style/style.css" type="text/css" rel="stylesheet" media="all" />
        <title>Simple Chess</title>
    </head>
    <body style="background-color: azure;">
        <?php
        if (!empty($validation))
            echo '<p style="color: azure;">' . $validation . '</p>';
        function autoloader($classname)
        {
            include 'classes/' . $classname . '.php';
        }

        spl_autoload_register('autoloader');

        //create a new game
        if (!isset($_SESSION['board']))
        {
            $board = new Board();
            $board->Init();
        }
        else
        {
            $board = unserialize($_SESSION['board']);
        }

        if (isset($_GET['action']) && $_GET['action'] == 'promotion' &&
            isset($_GET['x']) && ctype_digit($_GET['x']) &&
            isset($_GET['y']) && ctype_digit($_GET['y']))
        {
            $origin = unserialize($_SESSION['origin']);
            $piece = $board->GetPiece($origin);
            $x = $_GET['x'];
            $y = $_GET['y'];

            echo '<div id="promotion-box"><h1>Chose your player!</h1>';

            $pieceTypes = array('bishop', 'knight', 'rook', 'queen');
            foreach ($pieceTypes as $type)
            {
                echo '<a href="index.php?action=move_target&x=' . $x . '&y=' . $y . '&choice=' . $type . '"><img src="sprites/' . $piece->GetColor() . '_' . $type . '.png" /></a>';
            }
            
            echo '</div>';
        }
        else
        {
            if (!isset($_SESSION['logs']))
                $logs = new Log();
            else
            {
                $logs = unserialize($_SESSION['logs']);
            }

            if (empty($_GET))
            {
                $logs->Add($board->DisplayTurn(), 'info');
            }
//display position long with logs
            if (isset($_GET['action']))
            {
                //move from original location to a new location
                switch ($_GET['action'])
                {
                    case 'move_origin':
                        if (isset($_GET['x']) && ctype_digit($_GET['x']) &&
                                isset($_GET['y']) && ctype_digit($_GET['y']))
                        {
                            $origin = new Position($_GET['x'], $_GET['y']);
                            $piece = $board->GetPiece($origin);
                            if ($piece !== null)
                            {
                                if ($piece->GetColor() == $board->GetTurn())
                                {
                                    // King is in check ?
                                    if ($piece->GetColor() == Color::White && $board->GetWhiteKing()->InCheck() && $piece !== $board->GetWhiteKing() ||
                                            $piece->GetColor() == Color::Black && $board->GetBlackKing()->InCheck() && $piece !== $board->GetBlackKing())
                                    {
                                        $logs->Add('Your king is under attack, you have to move it quickly !', 'warning');
                                        header('Location: index.php');
                                    }
                                    else
                                    {
                                        $piece->ComputePossibleCells($board);

                                        if (count($piece->GetPossibleCells()) == 0)
                                        {
                                            $logs->Add('No move available for this piece !', 'error');
                                            header('Location: index.php');
                                        }
                                        else
                                            $_SESSION['origin'] = serialize($origin);
                                    }
                                }
                                else
                                {
                                    $logs->Add('This is not your turn !', 'error');
                                }
                            }
                        }
                        break;
                    case 'move_target':
                        
                        if (isset($_SESSION['origin']))
                        {
                            if (isset($_GET['x']) && ctype_digit($_GET['x']) &&
                                    isset($_GET['y']) && ctype_digit($_GET['y']))
                            {
                                $origin = unserialize($_SESSION['origin']);
                                $piece = $board->GetPiece($origin);
                                $target = new Position($_GET['x'], $_GET['y']);

                                if ($board->IsPromotion($piece, $target) && empty($_GET['choice']))
                                {
                                    header('Location: index.php?action=promotion&x=' . $target->x . '&y=' . $target->y);
                                    exit;
                                }
                                else
                                {
                                    if (!empty($_GET['choice']))
                                        $_SESSION['promotion'] = $_GET['choice'];
                                    if ($board->Move($origin, $target))
                                    {
                                        $board->NextTurn();
                                    }
                                    else
                                    {
                                        $logs->Add('Invalid move !!', 'error');
                                    }
                                }
                            }
                            else
                            {
                                $logs->Add('Invalid move !', 'error');
                            }

                            unset($_SESSION['origin']);

                            header('Location: index.php');
                        }
                        break;
                    default:
                        break;
                }
            }

            //clear the logs
            if (isset($_GET['clear']) && $_GET['clear'] == 1)
            {
                $logs->Clear();
            }

            //display all the possible moves that can be made with a piece
            //$board->DisplayPossibleCells(Color::White);

            $_SESSION['board'] = serialize($board);
            $_SESSION['logs'] = serialize($logs);
            ?>

            <div id="board">
                <?php $board->DrawBoard(); ?>
            </div>

            <div id="info">
                <br>
                <p style="text-align: center;">
                    <button type="button" class="btn btn-primary" style=" font-weight: bold; font-size: xx-large;"><a href="index.php?reset=1">Reset the game !</a></button><br />
                    <br>
                    <button type="button" class="btn btn-primary" style="font-style: normal";><a href="index.php?clear=1"><strong>(Clear logs)</strong></a></button>
                </p>
                <br>
                <div id="logs">
                    <?php
                    /*
                      echo '<pre>';
                      print_r($_SESSION);
                      echo '</pre>';
                     */
                    $logs->Display();
                    ?>
                </div>
            </div>
            <?php
            //display move history in the body
            //$board->DisplayHistory(); (not needed, only interferes with the css)
            //display spare pieces in the body
            $board->DisplayPieces();
        }
        ?>
    </body>
</html>