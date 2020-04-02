<?php


namespace BxUI\Component;


use BxHelper\Helper\Html;
use BxUI\Helper\Style;
use BxUI\Helper\UI;

/**
 * Class Modal
 * @package BxUI\Component
 * @license MIT
 *
 * @author AlexP007
 * @email alex.p.panteleev@gmail.com
 * @link https://github.com/AlexP007/bx-ui
 */
class Modal extends Basic
{
    const OVERLAY = 'bx-ui-modal-overlay';
    const BEFORE = 'bx-ui-modal-before';
    const DIALOG = 'bx-ui-modal-dialog';

    const OVERLAY_STYLES = [
        'position'   => 'fixed',
        'top'        => 0,
        'left'       => 0,
        'right'      => 0,
        'bottom'     => 0,
        'text-align' => 'center',
        'display'    => 'none',
        'z-index'    => 1012
    ];

    const BEFORE_STYLES = [
        'display'        => 'inline-block',
        'height'         => '100%',
        'vertical-align' => 'middle',
    ];

    const DIALOG_STYLES = [
        'position'       => 'relative',
        'display'        => 'inline-block',
        'vertical-align' => 'middle',
    ];

    protected function create(): array
    {
        $helper = Html::getInstance();
        $params = $this->params;

        $dismissParams = $params['dismiss'] ?? [];
        $overParams = $params['overlay'] ?? [];

        $overStyles = self::OVERLAY_STYLES;

        $overStyles['background'] = $overParams['background'] ?? 'rgba(0, 0, 0, 0.6)';

        $before = $helper->div(null, null, [
            'attributes' => [
                'style'     => Style::create(self::BEFORE_STYLES),
                'data-type' => self::BEFORE,
            ]
        ]);

        $dismiss = UI::getInstance()->dismiss('hide', [
            'content' => htmlspecialcharsback($dismissParams['icon']),
            'class'   => $dismissParams['class'],
            'style'   => $dismissParams['style'],
        ]);

        $dialog = $helper->div($dismiss . $params['content'], null, [
            'attributes' => [
                'style'     => Style::create(self::DIALOG_STYLES),
                'data-type' => self::DIALOG,
            ]
        ]);

        $content = $before . $dialog;

        return [
            $helper->div($content, null, [
                'attributes' => [
                    'id'           => $params['id'],
                    'style'        => Style::create($overStyles),
                    'data-type'    => self::OVERLAY,
                    'data-dismiss' => 'Y',
                ]
            ])
        ];
    }
}
