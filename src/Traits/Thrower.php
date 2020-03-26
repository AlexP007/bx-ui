<?php


namespace BxUI\Traits;


use BxUI\Exception\{
    LogicException,
    ParameterException
};

/**
 * Trait Thrower
 * @package BxUI\Traits
 *
 * @author AlexP007
 * @email alex.p.panteleev@gmail.com
 * @link https://github.com/AlexP007/bx-ui
 */
trait Thrower
{
    protected static function ensure(bool $expr, string $message)
    {
        if (!$expr) {
            throw new \Exception($message);
        }
    }

    protected static function ensureLogic(bool $expr, string $message)
    {
        if (!$expr) {
            throw new LogicException($message);
        }
    }

    protected static function ensureParameter(bool $expr, string $message)
    {
        if (!$expr) {
            throw new ParameterException($message);
        }
    }
}