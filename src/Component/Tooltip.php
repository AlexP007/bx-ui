<?php


namespace BxUI\Component;


use BxHelper\Helper\Html;

/**
 * Class Tooltip
 * @package BxUI\Component
 * @license MIT
 *
 * @author AlexP007
 * @email alex.p.panteleev@gmail.com
 * @link https://github.com/AlexP007/bx-ui
 */
class Tooltip extends Basic
{
    const DATA_TYPE = 'bx-ui-tooltip';
    const BACKGROUND = 'rgba(0, 0, 0, 0.8)';

    protected function create(): array
    {
        $helper = Html::getInstance();
        $params = $this->params;

        return [
            $helper->span($params['content'], $params['class'], [
                'attributes' => [
                    'id'              => $params['id'],
                    'style'           => $params['style'],
                    'data-tooltip'    => $params['tooltip'],
                    'data-position'   => $params['position'],
                    'data-background' => $params['background'] ?? self::BACKGROUND,
                    'data-type'       => self::DATA_TYPE,
                ]
            ])
        ];
    }
}
