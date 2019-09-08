<?php

set_time_limit(0);

for($i = 20780; $i <= 21128; $i++){

    $html = file_get_contents('https://hris.parliament.go.th/ss_detail.php?sapa_id=84&ssp_id='.$i.'+&lang=th');

    $myfile = fopen("../../../Representative_extraction/representative".$i.".html", "w") or die("Unable to open file!");
    fwrite($myfile, $html);
    fclose($myfile);

}




?>