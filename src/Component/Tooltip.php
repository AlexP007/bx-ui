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
    const BACKGROUND = 'rgba(0, 0, 0)';
    const COLOR = '#FFF';
    const FONT_FAMILY = 'arial';
    const FONT_SIZE = '12px';
    const EVENT = 'hover';

    protected function create(): array
    {
        $helper = Html::getInstance();
        $params = $this->params;

        return [
            $helper->span($params['content'], $params['class'], [
                'attributes' => [
                    'id'               => $params['id'],
                    'style'            => $params['style'],
                    'data-tooltip'     => $params['tooltip'],
                    'data-position'    => $params['position'],
                    'data-color'       => $params['color'] ?? self::COLOR,
                    'data-font-size'   => $params['font-size'] ?? self::FONT_SIZE,
                    'data-font-family' => $params['font-family'] ?? self::FONT_FAMILY,
                    'data-background'  => $params['background'] ?? self::BACKGROUND,
                    'data-event'       => $params['event'] ?? self::EVENT,
                    'data-type'        => self::DATA_TYPE,
                ]
            ])
        ];
    }
}
