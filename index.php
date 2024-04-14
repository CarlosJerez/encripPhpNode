<?php

class AesCipher
{

    private const OPENSSL_CIPHER_NAME = "aes-128-ecb";
    private const CIPHER_KEY_LEN = 16; //128 bits       
    /**
     * Encripta datos en AES ECB de 128 bit key
     * 
     * @param type $keybank - Clave enviada 
     * @return keybankhash Hash en sha 256 de la clave enviada por el banco
     */
    static function createKeyhash($keybank)
    {
        $keybankhash = hash("sha256", $keybank, true);

        # return substr($keybankhash, 0, 16);
        return $keybankhash;
    }
    /**
     * Selecciona los primeros 16 byte del hash de la clave
     * 
     * @param type $key - Hash en sha 256 de la clave enviada por el banco
     * @return key 16 bytes de del hash de la clave enviada por el Banco
     */
    private static function fixKey($key)
    {
        if (strlen($key) < AesCipher::CIPHER_KEY_LEN) {
            //0 pad to len 16
            $local = str_pad("$key", AesCipher::CIPHER_KEY_LEN, "0");
            return $local;
        }

        if (strlen($key) > AesCipher::CIPHER_KEY_LEN) {
            //truncate to 16 bytes
            $local = substr($key, 0, AesCipher::CIPHER_KEY_LEN);
            return $local;
        }
        return $key;
    }
    /**
     * Encripta datos en AES ECB de 128 bit key
     * 
     * @param type $key - Clave enviada por el banco debe ser de 16 bytes en sha-256
     * @param type $data - Datos a ser cifrados
     * @return encrypted Datos cifrados
     */
    static function encrypt($key, $data)
    {
        $encodedEncryptedData = base64_encode(openssl_encrypt($data, AesCipher::OPENSSL_CIPHER_NAME, AesCipher::fixKey($key), OPENSSL_PKCS1_PADDING));
        return $encodedEncryptedData;
    }
    /**
     * Desencripta datos en AES ECB de 128 bit key
     * 
     * @param type $key - Clave enviada por el banco debe ser de 16 bytes en sha-256
     * @param type $data - Datos a ser cifrados
     * @return decrypted Datos Desencriptados
     */
    static function decrypt($key, $data)
    {
        $decryptedData = openssl_decrypt(base64_decode($data), AesCipher::OPENSSL_CIPHER_NAME, AesCipher::fixKey($key), OPENSSL_PKCS1_PADDING);
        return $decryptedData;
    }
};
/**
 *  
 * Ejemplo para cifrar y descifrar datos intercambios 
 * pos los API de Mercantil Banco 
 * 
 *
 */
const OPENSSL_CIPHER_NAME = "aes-128-ecb";

# CVV a Encripta
$inDato = $argv[1];
$inKeybank = $argv[2];

$origen  = mb_convert_encoding($inDato, "UTF-8");
$keybank = mb_convert_encoding($inKeybank, "UTF-8");

# Generacion del hash a partir de la clave secreta del banco
$keyhash = AesCipher::createKeyhash($keybank);

# Encripta el CVV
$datoscrypt = AesCipher::encrypt($keyhash, $origen);

echo "$datoscrypt";
