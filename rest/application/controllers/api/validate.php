<?php defined('BASEPATH') OR exit('No direct script access allowed');

/**
 * Example
 *
 * This is an example of a few basic user interaction methods you could use
 * all done with a hardcoded array.
 *
 * @package             CodeIgniter
 * @subpackage  Rest Server
 * @category    Controller
 * @author              Phil Sturgeon
 * @link                http://philsturgeon.co.uk/code/
*/

// This can be removed if you use __autoload() in config.php OR use Modular Extensions
require APPPATH.'/libraries/REST_Controller.php';
//require_once('recaptchalib.php');
require APPPATH.'/libraries/recaptchalib.php';

class Validate extends REST_Controller
{
   /*public function __construct()
    {
        parent::__construct();
        $this->load->model('quote_model');
    }*/

    function verify_post()
    {
        $publickey = "";    
        $privatekey = "";
        $resp = null;
        $error = null;

        $response=$this->post('response');
        $challenge=$this->post('challenge');
        $remoteip=$this->post('remoteip');

        $result = recaptcha_check_answer ($privatekey, $remoteip, $challenge, $response);
        
        if($result->is_valid) {
            $this->response(array('result'=>'valid'), 200);
        }
        else{        
            $this->response(array('result'=>'invalid'), 200);
        }
        
    }   

   
   
}