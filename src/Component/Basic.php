<?php


namespace BxUi\Component;


/**
 * Class Basic
 * @package BxUi\Component
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
        return $this->render();
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
    private function render(): string
    {
        return implode($this->create() );
    }
}