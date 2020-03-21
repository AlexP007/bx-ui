<?php


namespace BxUI\Component;


/**
 * Class Basic
 * @package BxUI\Component
 * @license MIT
 *
 * @author AlexP007
 * @email alex.p.panteleev@gmail.com
 * @link https://github.com/AlexP007/bx-ui
 */
abstract class Basic
{
    protected $params;

    public final function __construct(array $params)
    {
        $this->params = $params;
    }

    /**
     * Обязательный метод, должен
     * вернуть массив с HTML строками
     *
     * @return array
     */
    protected abstract function create(): array;

    /**
     * Просто склеивает массив
     * и возвращает HTML строку
     *
     * @return string
     */
    public function render(): string
    {
        return implode($this->create() );
    }
}
