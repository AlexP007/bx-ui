<?php


namespace BxUI\Component;


use BxHelper\Helper\Html;

/**
 * Class ModalOpener
 * @package BxUI\Component
 * @license MIT
 *
 * @author AlexP007
 * @email alex.p.panteleev@gmail.com
 * @link https://github.com/AlexP007/bx-ui
 */
class ModalOpener extends Basic
{
    const DATA_TYPE = 'bx-ui-modalopener';

    protected function create(): array
    {
        $helper = Html::getInstance();
        $params = $this->params;

        return [
            $helper->a($params['content'], null, [
                'attributes' => [
                    'id'         => $params['id'],
                    'style'      => $params['style'],
                    'class'      => $params['class'],
                    'data-target' => $params['modal'],
                    'data-type'  => self::DATA_TYPE
                ]
            ])
        ];
    }
}
